
export function formatBRL(value?: number | string | null): string {
    if (value) {
        let valueUnformatted = parseFloat(value.toString());
        return (
            "R$ " +
            valueUnformatted.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
            })
        );
    }
    return "R$0,00";
}

export const handleExit = () => {
    localStorage.clear();
};
