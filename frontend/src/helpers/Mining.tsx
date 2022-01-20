import { TailSpin } from "react-loader-spinner";

export interface IMining {
	isMining: boolean;
	txHash: string;
}
/**
 * To be used with this helper:
 *
 * ```js
 * const [{ isMining, txHash }, setIsMining] = useState({
 * 	isMining: false,
 *		txHash: ''
 * });
 * ```
 */
export const Mining = ({ isMining, txHash }: IMining) =>
	isMining ? (
		<div className="text-center my-6">
			<h4 className="animate-pulse text-2xl">⛏️ Mining transaction... ⛏️</h4>
			<p className="animate-pulse mt-1">This takes about 15-20 seconds.</p>
			<p>You can see your pending transaction here: </p>
			<a
				href={`https://rinkeby.etherscan.io/tx/${txHash}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				EtherScan
			</a>
			<div className="flex justify-center m-10">
				<TailSpin visible={isMining} color="#F00" height={150} width={150} />
			</div>
		</div>
	) : null;
