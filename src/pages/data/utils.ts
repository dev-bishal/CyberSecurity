function getFormattedDate(parameter_date:any){
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return parameter_date.toLocaleString('en-US', options)
}

export {getFormattedDate}