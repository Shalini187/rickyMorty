export const keyExtractor = (_item: any, index: { toString: () => any }) => index.toString();

export const colorCode = (status: string) => {
    const val = [{ name: 'Alive', color: 'green' }, { name: 'Dead', color: 'red' }, { name: 'unknown', color: '#440F3C' }];
    let result = val.find(ele => ele?.name == status);

    return result?.color;
}