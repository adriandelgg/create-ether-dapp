import Loader from 'react-loader-spinner';

interface Props {
	isLoading: boolean;
}

const Loading = ({ isLoading }: Props) =>
	isLoading ? (
		<div className="flex justify-center">
			<Loader type="TailSpin" color="#009900" height={100} width={100} />
		</div>
	) : null;

export default Loading;
