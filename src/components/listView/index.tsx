import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text, SafeAreaView, Image, Pressable } from "react-native";
import { get } from "../../services";
import { listStyle, screen } from "../../styles";
import { colorCode, keyExtractor } from "../../utills";
import { FooterView, SystemModal } from '../../components';

const SystemListView = () => {
    const [data, setData] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState<any>({ visible: false, selectedItem: '' });
    const [page, setPage] = useState<any>({ next: null, prev: null });

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async (url: string) => {
        setLoading(true);
        try {
            let response = await get(url);

            let { results, info } = response || {};
            let { next, prev, count, ...rest } = info || {};

            setData(results);
            setPage({ ...page, next, prev, count, pages: page?.pages + 1 })
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }

    const handleOptions = (url: any) => {
        setState({ ...state, visible: !(state?.visible), selectedItem: url });
    }

    let renderImage = (images: string) => {
        return (
            <Image source={{ uri: images }} style={{ height: 100, width: 100 }} />
        );
    };

    const renderItem = ({ item, index }: any) => {
        let { name, status, image, url } = item || {};
        let color = colorCode(status);
        return (
            <Pressable onPress={() => handleOptions(url)} key={index} style={listStyle.container}>
                <View style={listStyle.left}>{renderImage(image)}</View>
                <View style={listStyle.row}>
                    <View style={listStyle.right}>
                        <Text style={listStyle.text}>{name}</Text>
                        <Text style={{ color, ...listStyle.status }}>{status}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={screen.layout}>
            <View style={screen.container}>
                <Text style={screen.text}>{'CHARACTERS'}</Text>
            </View>

            {loading ? <ActivityIndicator size={'large'} color={'#01579B'} /> : <></>}
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingBottom: 50 }}
            />
            <SystemModal handleClick={() => handleOptions(null)} state={state} />
            <FooterView prev={page?.prev} next={page?.next} getCharacters={getCharacters} />
        </SafeAreaView>
    );
};

export default SystemListView;