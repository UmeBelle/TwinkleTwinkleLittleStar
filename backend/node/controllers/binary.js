const binary = (a, b) => {
    let value = "";
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    value = a + b;
    return value;
}

const sendData = async(req, res) => {
    try{
        const { day, month } = await req.body;
        const data = binary(day, month);
        return res
        .status(200)
        .json({data: data, message: "Coordenates sent", success: true}); 
    } catch(error){
        return next(error);
    }
}

module.exports = sendData;