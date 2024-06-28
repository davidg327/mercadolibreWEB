export const formatCurrency = (amount: number, currency: string, decimals: number) => {
    return new Intl.NumberFormat('es-ES', {
        //style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(amount)
};
