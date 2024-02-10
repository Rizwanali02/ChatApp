import User from "../models/user.model.js";

const getUsersSidebar = async (req, res) => {
    try {

        const loggedInUserid = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserid } }).select("-password")
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log(`Error in getUserSidebar -- ${error}`);
        res.status(500).json({ error: "Internal server error in getUserSidebar" })
    }

}

export { getUsersSidebar } 