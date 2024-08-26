function Small({value}) {
    console.log('si me vuelvo a ejecutar :(');
    // const valueMemo = useMemo(() => {
    //     console.log('me volví a dibujar :(');
    //     return value;
    // }, [value]);

    return (
        <small>{value}</small>
    )
}

export default Small;