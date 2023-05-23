
const currencyFormatter = (value: number) => {

    const curr = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' });

    return curr.format(value)

}

export default currencyFormatter;