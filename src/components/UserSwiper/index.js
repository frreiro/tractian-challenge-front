import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import styled from 'styled-components';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { PlusCircleFilled } from '@ant-design/icons';

import useUsers from '../../hooks/api/useUsers.js';
import Tooltip from '../Menu/Tooltip.js';
import CreateAsset from '../Menu/CreateAsset.js';
import CreateUser from '../Menu/CreateUser.js';
import { toast } from 'react-toastify';

//TODO: tratar os loading e erros
export default function UserSwiper({ selectUser }) {
	const { users: oldUsers, usersIsLoading, usersError, getAllUsersAsync } = useUsers();
	const [users, setNewUsers] = useState(oldUsers);

	useEffect(() => {
		if (oldUsers) {
			setNewUsers(oldUsers);
		}
	}, [oldUsers]);

	useEffect(() => {
		(async () => {
			try {
				const users = await getAllUsersAsync();
				setNewUsers(users);
			} catch (e) {
				toast.error('Could not get users');
			}
		})();
	}, []);

	return (
		<SwiperWrapper>
			<Swiper
				slidesPerView={3}
				spaceBetween={0}
				centeredSlides={true}
				//loop={true}
				updateOnWindowResize={true}
				direction={'vertical'}
				breakpoints={{
					760: {
						direction: 'horizontal',
						spaceBetween: 10,
						slidesPerView: 3,
						pagination: true,
					}
				}}
			>
				{users?.map(user => {
					return (
						<SwiperSlide key={user._id} onClick={() => selectUser(user)}>
							<UserInfoWrapper>
								<UserImage image={user.picture} />
								<UserName>{user.name}</UserName>
								{user.is_admin ? <UserPosition>admin</UserPosition> : <></>}
							</UserInfoWrapper>
						</SwiperSlide>
					);
				})}
				<SwiperSlide >
					<Tooltip content={<CreateUser setNewUsers={(users) => setNewUsers(users)} />}>
						<PlusCircleFilled style={{ color: '#fff', fontSize: 60, marginTop: 10, cursor: 'pointer' }} />
					</Tooltip>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper >
	);
}

const UserName = styled.h1`
	color: white;
	margin-top: 10px;
	margin-bottom: 6px;
`;

const UserPosition = styled.p`
	color: white;

`;

const UserInfoWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const UserImage = styled.div`
	height: 95px;     
    width: 95px;
	background: url(${props => props.image});
	background-color: white;
	background-size: cover;
	border-radius: 50%;
`;

const SwiperWrapper = styled.div`

	.swiper {
  	width: 100vw;
  	height: 150%;
	}

	.swiper-slide {
	height: 300px;
	
	text-align: center;
	font-size: 18px;
	/*background: #fff;*/
	transition: all .3s ease;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;

		&.swiper-slide-active {

			${UserInfoWrapper}{
				h1{
					font-size: 32px;
					margin-top: 40px;
				}
			}

			${UserImage}{
				transform: scale(1.6);
			}
		}
	}


    @media (max-width: 760px) {
      .swiper {
        width: 100vw;
		height: calc(100vh - 300px);
      }

	  ${UserName}{
		font-size: 20px;
		margin-top: 5px;
		margin-bottom: 1px;
	  }

	  ${UserPosition}{
		font-size: 15px;
	  }

    }

`;

