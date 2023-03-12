import {Container, Links, Content} from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Tags } from '../../components/Tags';

export function Details(){
  return (
    <Container>  
      <Header />
  
      <main>
        <Content>
          <ButtonText  title="Excluir nota" />

          <h1>
            Introdução ao react
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa autem tenetur, dicta voluptatem expedita quod, rerum magnam quia voluptatibus, vitae optio. Iste enim unde odit molestias minus eos blanditiis.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li><a href='#'>https://app.rocketseat.com.br/</a></li>
              <li><a href='#'>https://app.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express"/>
            <Tags title="Note"/>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
   </Container>
  )

}