import './App.css';
import {TwitterFollowCard} from './TwitterFollowCard.jsx';

export function App() {

	const users =[
		{
			userName: 'fernandocolnoz',
			name: "Fernando Colmenarez",
			isFollowing : true
		}
		,
		{
			userName: 'fernandocolnoz',
			name: "Fernando Oronoz",
			isFollowing : false
		}
		,
		{
			userName: 'fernandocolnoz',
			name: "Fernando Colnoz",
			isFollowing : false
		},
		{
			userName: 'fernandocolnoz',
			name: "Fernando Nozcol",
			isFollowing : true
		},
		{
			userName: 'fernandocolnoz',
			name: "Fernando Colmenarez",
			isFollowing : false
		}
	]


	return (
		<section className="App">
			{
				users.map(({userName, isFollowing, name}) => (
					<TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
						{name}
					</TwitterFollowCard>
				))
			}
		</section>
	);
}
