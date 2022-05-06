import React from "react";
import { Button, View } from "react-native";
import { detail } from "../../styles";

interface Iprops {
    prev: string;
    next: string;
    getCharacters: Function;
}

const FooterView = (props: Iprops) => {
    let { prev, next, getCharacters } = props || {};

    let buttonActions = [
        {
            name: ' << ',
            visible: prev,
            onPress: () => {
                if (prev) return getCharacters(prev)
            }
        },
        {
            name: ' >> ',
            visible: next,
            onPress: () => {
                if (next) return getCharacters(next)
            }
        }
    ];

    return (
        <>
            <View style={detail.divider} />
            <View style={detail.container}>
                <View style={detail.layout}>
                    <View style={detail.align}>
                        {
                            buttonActions.map((ef: any, k: number) => {
                                let { name, onPress, visible } = ef || {};
                                if (visible) {
                                    return (
                                        <Button
                                            key = {k}
                                            title={name}
                                            color={'#01579B'}
                                            onPress={onPress}
                                        />
                                    )
                                } else return <View key = {k + 10} style={{ alignItems: 'flex-end' }} />
                            })
                        }
                    </View>
                </View>
            </View>
        </>
    )
};

export default FooterView;