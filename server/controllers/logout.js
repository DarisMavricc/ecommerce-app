export const logout = (req,res) => {
    res.clearCookie('accessToken');
    return res.status(200).json("Cookies deleted");
}