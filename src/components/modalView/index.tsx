import React, { useEffect, useState } from "react";
import { Modal, Text, Pressable, View, SafeAreaView, Image, ScrollView } from "react-native";
import { get } from "../../services";

import { detail, modalStyle } from '../../styles';

function SystemModal(props: any) {
    let { handleClick, state } = props || {};
    let { visible, selectedItem } = state || {};
    let { centeredView, sections, textStyle, modalText, close, layout, heading, modalView, keys, textLayout, number } = modalStyle || {};

    const [dataItem, setDataItem] = useState<any>({ data: {}, location: {}, episodes: [] });

    useEffect(() => {
        if (visible) getDetails();
        return () => { }
    }, [visible]);

    const getDetails = async () => {
        let epiArr = [];
        try {
            let response = await get(selectedItem);

            let { location, episode, ...rest } = response || {};
            let loc = await get(location?.url);

            for (let i in episode) {
                epiArr?.push(await get(episode[i]));
            }
            setDataItem({ ...dataItem, data: rest, location: loc, episodes: epiArr });
        } catch (e) {
            console.log("Error", e)
        }
    }

    const renderModalView = () => {
        let { data, episodes, location } = dataItem || {};
        let { image, name, species, status, gender, origin } = data || {};
        let { name: nameLocation, type, dimension } = location || {};
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ ...layout, paddingVertical: 16 }}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={{ uri: image }} style={{ height: 300, width: 300 }} />
                </View>
                <View style={modalView}>
                    <Text style={heading}>{'Details'}</Text>
                    {
                        [{ id: 'name', value: name }, { id: 'species', value: species }, { id: 'gender', value: gender }, { id: 'origin', value: origin?.name }, { id: 'status', value: status }]?.map((ef, index) => {
                            let { id, value } = ef || {};
                            return (
                                <View key={index} style={{ paddingVertical: 4, flexDirection: 'row' }}>
                                    <Text style={keys}>{`${id} : `}</Text>
                                    <Text style={{ fontSize: 16 }}>{value || '--'}</Text>
                                </View>
                            )
                        })
                    }
                    <View style={sections}>
                        <Text style={heading}>{'Location'}</Text>
                        {
                            [{ id: 'name', value: nameLocation }, { id: 'type', value: type }, { id: 'dimension', value: dimension }]?.map((ef, index) => {
                                let { id, value } = ef || {};
                                return (
                                    <View key={index} style={{ paddingVertical: 4, flexDirection: 'row' }}>
                                        <Text style={keys}>{`${id} : `}</Text>
                                        <Text style={{ fontSize: 16 }}>{value || '--'}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View>
                        <Text style={heading}>{'Episodes'}</Text>
                        {
                            episodes?.map((ef: any, index: number) => {
                                let { name, episode, created, air_date } = ef || {};
                                let date = (new Date(created)).toString().split(' ').splice(1,3).join(' ');
                                if (name) {
                                    return (
                                        <View key = {index}>
                                            <Text style={number}>{`${index + 1} . `}</Text>
                                            {
                                                [{ id: 'name', value: name }, { id: 'episode', value: episode }, { id: 'air_date', value: air_date }, { id: 'created', value: date }]?.map((ef, key) => {
                                                    let { id, value } = ef || {};
                                                    return (
                                                        <View key = {key} style={{ flex: 1, paddingHorizontal: 24 }}>
                                                            <View key={index} style={textLayout}>
                                                                <Text style={keys}>{`${id} : `}</Text>
                                                                <Text style={{ fontSize: 16 }}>{value || '--'}</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                            <View style={{ paddingBottom: 16 }} />
                                            <View style={detail.divider} />
                                        </View>
                                    )
                                }
                            })
                        }
                    </View>
                </View>
                <View style={{ paddingBottom: 150 }} />
            </ScrollView>
        )
    }

    return (
        <Modal animationType={'slide'} visible={visible} onRequestClose={handleClick}>
            <SafeAreaView style={layout}>
                <View style={centeredView}>
                    <Text style={textStyle}>{`Character Details`}</Text>
                    <Pressable onPress={handleClick} style={close}>
                        <Text style={modalText}>{'X'}</Text>
                    </Pressable>
                </View>
                {renderModalView()}
            </SafeAreaView>
        </Modal>
    );
};

export default SystemModal;