import ButtonFullWidth from '@/components/atoms/ButtonFullWidth';
import {
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '@/components/organisms/AccountPage/styles';
import { useRouter } from 'next/router';
import {
  AccountManagementContent,
  ButtonsWrapper,
  ExplanationContainer,
  ExplanationWrapper,
} from './styles';

export function AccountManagementTab() {
  const router = useRouter();
  function handleTabDisable() {
    router.push({ query: { tab: 'disable-account' } });
  }

  function handleTabExclude() {
    router.push({ query: { tab: 'exclude-account' } });
  }
  return (
    <TabContainer value="account-management">
      <TitleTab>Gestão da conta</TitleTab>
      <SubtitleTab>
        Você tem duas opções para se ausentar da plataforma: desativar ou
        excluir sua conta.
      </SubtitleTab>

      <AccountManagementContent>
        <ExplanationWrapper>
          <ExplanationContainer>
            Desative sua conta e ela será temporariamente suspensa, mantendo
            seus dados e permitindo reativação a qualquer momento.
          </ExplanationContainer>
          <ExplanationContainer>
            Ao excluir, ela será deletada permanentemente após 30 dias. Após
            esse prazo, seus dados serão removidos definitivamente.
          </ExplanationContainer>
        </ExplanationWrapper>
        <Divider />
        <ButtonsWrapper>
          <ButtonFullWidth textcolor="gray" onClick={handleTabDisable}>
            Desativar conta
          </ButtonFullWidth>
          <ButtonFullWidth textcolor="red" onClick={handleTabExclude}>
            Excluir conta
          </ButtonFullWidth>
        </ButtonsWrapper>
      </AccountManagementContent>
    </TabContainer>
  );
}
