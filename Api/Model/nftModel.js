const mongoose =  require("mongoose");

const nftSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    category: String,
    email: String,
    address: String,

    CreatedAt: {
        type: Date,
        default: Date.now,
    },
    image: String,
});



const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;