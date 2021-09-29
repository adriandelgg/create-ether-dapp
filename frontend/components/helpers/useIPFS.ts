import { create } from 'ipfs-http-client';
import axios from 'axios';

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

/**
 * Uploads the file to IPFS.
 * @notice Must use `await` with this function.
 * @param {Buffer} fileBuffer The file converted into a buffer.
 * @returns The IPFS CID hash.
 */
export async function uploadIPFS(fileBuffer: Buffer) {
	try {
		const { path } = await ipfs.add(fileBuffer);
		return path;
	} catch (e) {
		console.error(e);
	}
}

/**
 * Pins the file to Pinata
 * @notice Must use `await` with this function.
 * @param {string} hash The IPFS CID to pin.
 */
export async function pinNFT(hash: string) {
	try {
		const url = 'https://api.pinata.cloud/pinning/pinByHash';
		await axios.post(
			url,
			{ hashToPin: hash },
			{
				headers: {
					pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
					pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY
				}
			}
		);
	} catch (e) {
		console.error(e);
	}
}
