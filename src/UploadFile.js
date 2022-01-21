import React, {useState} from 'react';
import { NFTStorage,File} from "nft.storage";
const APIKEY = 'MY-API-KEY';

const UploadFile=() => {
    const nftStorage = new NFTStorage({token: APIKEY});
    
    const [file, setFile] = useState();
    const handleFileUpload = (event) => {
        console.log("file is uploaded");
        setFile(event.target.files[0]);
    }
    const uploadFileToFilecoin = async(inputFile) =>{
        try {
            const metadata = await nftStorage.store({
                name: 'Harmony NFT collection',
                description: 'This is a Harmony NFT collenction stored on IPFS & Filecoin.',
                image: inputFile
            });
            console.log(metadata.url);
    
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className='MintNFT'>
            <form>
                <h4>Upload your NFT on Filecoin/IPFS</h4>
                <input type="file" onChange={handleFileUpload}></input>
                <button onClick={()=>uploadFileToFilecoin(file)}>Upload File</button>
            </form>
        </div>
        
    );
}
export default UploadFile;