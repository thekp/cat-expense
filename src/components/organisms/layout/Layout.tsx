import { PageContainer } from '@/components/atoms/pageContainer/PageContainer';
import { MainContainer } from '@/components/atoms/mainContainer/MainContainer';
import { Header } from '@/components/molecules/header/Header';
import { Footer } from '@/components/molecules/footer/Footer';
import { MetaData } from '@/components/molecules/metaData/MetaData';

type Props = {
	children?: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
	return (
		<PageContainer>
			<MetaData />
			<Header />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</PageContainer>
	);
};
