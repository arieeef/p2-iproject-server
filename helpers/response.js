const response = (res,status,message,data=null) => {
    res.status(status).json({
        message,
        data : data
    })
}

module.exports = response