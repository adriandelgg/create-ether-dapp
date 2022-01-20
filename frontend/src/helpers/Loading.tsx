import { TailSpin } from "react-loader-spinner";

interface Props {
	isLoading: boolean;
}

export const Loading = ({ isLoading }: Props) =>
	isLoading ? (
		<div className="flex justify-center">
			<TailSpin color="#009900" height={100} width={100} />
		</div>
	) : null;
