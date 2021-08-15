import styled from 'styled-components/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from '../textStyle';

export const GameScreen = ({route, navigation}) => {
    const {game} = route.params;

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(<Ionicons
                key={i}
                name="md-star"
                size={16}
                style={{marginRight: 5}}
                color={Math.floor(game.metascore/2) >= i ? "#818ee5": "#434958"}
            />)
        };

        return (
            <Stars>
                {stars}
            </Stars>
        );
    }

    return (
        <GameContainer>
            <StatusBar barStyle="light-content" hidden={true}/>
            <GameArtContainer>
                <GameArt source={game.cover} />
                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons name={"close"} size={48} color="#ffffff"></Ionicons>
                </BackButton>
            </GameArtContainer>

            <GameInfoContainer>
                <GameThumbContainer>
                    <GameThumb source={game.cover}/>
                </GameThumbContainer>
                <GameInfo>
                    <Text heavy medium>
                        {game.title}
                    </Text>
                    <Text color="#9a9a9a">{game.teaser}</Text>
                </GameInfo>
                <Download>
                    <Ionicons name="md-cloud-download" size={24} color="#ffffff" />
                </Download>
            </GameInfoContainer>

            <GameStarsContainer>
                {renderStars()}
                <Text heavy color="#9a9a9a">
                    {game.metascore}
                </Text>
                <Text bold color="#9a9a9a">
                    {game.category[0]}
                </Text>
                <Text bold color="#9a9a9a">
                    {game.age}
                </Text>
                <Text bold color="#9a9a9a">
                    Game of the day
                </Text>
            </GameStarsContainer>

            <ScreenShotContainer>
                <ScreenShots horizontal={true} showsHorizontalScrollIndicator={false}>
                    {game.screenshots.map((screenshot, index) => {
                    return (
                        <ScreenShotsContainer key={index} >
                            <ScreenShot source={screenshot} />
                        </ScreenShotsContainer>
                    )})}
                </ScreenShots>
            </ScreenShotContainer>

            <Description medium color={"#9a9a9a"}>
                {game.description}
            </Description>

        </GameContainer>
)
};

const GameContainer = styled.ScrollView`
  background-color: #343434;
  flex: 1;
`;

const GameArtContainer = styled.View`
  position: relative;
`;

const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 16px;
`;

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;

`;
const GameThumbContainer = styled.View`
  shadow-color: #000000;
`;

const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const GameStarsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const ScreenShotsContainer = styled.View`
  margin: 8px 10px;
`;

const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000000;
`;

const ScreenShots = styled.ScrollView``;

const ScreenShot = styled.Image`
  width:300px;
  height:200px;
  border-radius: 12px;
`;

const Description = styled(Text)`
  margin: 0 16px;
  line-height: 22px;
`
