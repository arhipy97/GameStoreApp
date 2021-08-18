import React from 'react';
import {StatusBar} from 'react-native'
import styled from 'styled-components';
import Entypo from 'react-native-vector-icons/Entypo';

import {Text} from '../textStyle';
import {games} from '../../src/gameData';


export const ProfileScreen = () => {
	return (
		<Container>
			<StatusBar barStyle="light-content" />

			<AvatarContainer>
				<Avatar souce={require("../../assets/logo.png")} />
				<Text large bold>
					DesignIntoCode
				</Text>
			</AvatarContainer>

			<Badge>
				<Text small heavy>
					Pro Player
				</Text>
			</Badge>

			<Stats>
				<Stat>
					<Text large heavy>
						250 <Text color="#9a9a9a">Games</Text>
					</Text>
				</Stat>

				<Stat>
					<Text large heavy>
						3 <Text color="#9a9a9a">Purchases</Text>
					</Text>
				</Stat>
			</Stats>

			<Text center large>
				Purchased games
			</Text>

			<Games
				data={games}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<Game>
							<GameImage source={item.cover} />
							<Info>
								<Text bold>{item.title}</Text>
								<Text small color="#9a9a9a">
									{Math.floor(Math.random() * 1000) + 1} Sales
								</Text>
							</Info>
							<Text heavy color="#819ee5">
								${Math.floor( Math.random() * 50) + 1}
							</Text>
						</Game>
					)
				}}
			>


			</Games>

			<Account>
				<Setting>
					<Entypo name="cog" size={24} color="#ffffff" />
				</Setting>
				<Logout>
					<Text heavy>Logout</Text>
				</Logout>

			</Account>
		</Container>
	)
};


const Container = styled.View`
	flex: 1;
	background-color: #343434;
`

const AvatarContainer = styled.View`
	margin: 64px 0 16px 0;
`

const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	margin-bottom: 16px;
`

const Badge = styled.View`
	background-color: #819ee5;
	align-self: center;
	padding: 4px 12px;
	border-radius: 8px;
`

const Stats = styled.View`
	flex-direction: row;
	align-items: center;
	align-self: center;
	margin: 32px 0;
`

const Stat = styled.View`
	margin: 0 16px;
`

const Games = styled.FlatList`
	margin: 32px 16px 0 16px;
`

const Game = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 16px;
`

const GameImage = styled.View`
	width: 64px;
	height: 64px;
	border-radius: 12px;
`

const Info = styled.View`
	flex: 1;
	margin: 0 16px;
`

const Account = styled.View`
	margin: 32px 16px;
	flex-direction: row;
`

const Setting = styled.TouchableOpacity`
	background-color: #819ee5;
	padding: 12px;
	border-radius: 8px;
`

const Logout = styled.TouchableOpacity`
	flex: 1;
	background-color: #404040;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	margin-left: 16px;
`
