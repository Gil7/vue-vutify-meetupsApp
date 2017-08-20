export default (value) => {
    const date = new Date()
    return date.toLocaleString(['es-mx'], 
    {
        month: 'short', 
        day: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}