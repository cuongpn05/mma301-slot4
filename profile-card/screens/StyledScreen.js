import React from 'react';
import { ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { PROFILES } from '../data/profiles';

const Container = styled.View`
  flex: 1;
  background-color: #f8fafc;
`;

const Header = styled.View`
  padding-top: 50px;
  padding-bottom: 16px;
  padding-horizontal: 20px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #e2e8f0;
`;

const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
`;

const HeaderSubtitle = styled.Text`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`;

const Content = styled(ScrollView)`
  padding: 16px;
`;

const Card = styled.View`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 14px;
  border-width: 1px;
  border-color: #e2e8f0;
  elevation: 3;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #cbd5e1;
`;

const Info = styled.View`
  margin-left: 14px;
  flex: 1;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
`;

const Role = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #6366f1;
  margin-top: 2px;
`;

const Contact = styled.Text`
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
`;

const Bio = styled.Text`
  font-size: 14px;
  color: #334155;
  line-height: 20px;
  margin-bottom: 14px;
`;

const SkillsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.View`
  background-color: #eef2ff;
  padding-horizontal: 10px;
  padding-vertical: 4px;
  border-radius: 12px;
`;

const BadgeText = styled.Text`
  font-size: 12px;
  color: #4f46e5;
  font-weight: 600;
`;

export default function StyledScreen() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Profile Card (Styled-Components)</HeaderTitle>
        <HeaderSubtitle>Giao diện xây dựng bằng styled-components/native</HeaderSubtitle>
      </Header>

      <Content showsVerticalScrollIndicator={false}>
        {PROFILES.map((profile) => (
          <Card key={profile.id}>
            <HeaderRow>
              <Avatar source={{ uri: profile.avatar }} />
              <Info>
                <Name>{profile.name}</Name>
                <Role>{profile.role}</Role>
                <Contact>{profile.email}</Contact>
              </Info>
            </HeaderRow>

            <Bio>{profile.bio}</Bio>

            {profile.skills && (
              <SkillsContainer>
                {profile.skills.map((skill, index) => (
                  <Badge key={index}>
                    <BadgeText>{skill}</BadgeText>
                  </Badge>
                ))}
              </SkillsContainer>
            )}
          </Card>
        ))}
      </Content>
    </Container>
  );
}
