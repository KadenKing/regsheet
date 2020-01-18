const setText = (newText) => {
    return {
        type: 'SET_TEXT',
        payload: newText,
    }
}

export default setText