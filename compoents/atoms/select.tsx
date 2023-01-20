export const Select2 = (props: {
                            data: any[];
                            defaultValue: string | number | readonly string[] | undefined;
                            onChange: (event: number) => void;
                        }
) => {
    const options = props.data.map((item, index) => {
        console.log("log_id_item",item.pic_id, item.pic_name)
        console.log("log_defaultValue",props.defaultValue)
        return <option key={index} value={item.pic_id} selected={props.defaultValue === item.pic_id}>{item.pic_name}</option>
    });
    return (
        <select defaultValue={props.defaultValue} onChange={(event) => props.onChange(Number(event.target.value))}>
            {options}
        </select>
    )
}