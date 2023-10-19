import {useState} from 'react';

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ children, userName= 'unknown', initialIsFollowing}) {

	const [isFollowing, setIsFollowing ] =  useState(initialIsFollowing);

	const text = isFollowing
		? 'Siguiendo'
		: 'Seguir';

	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button';

	const imageSrc = `https://unavatar.io/${userName}`;

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					alt={`El avatar de ${userName}`}
					src={imageSrc}/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>);
}
