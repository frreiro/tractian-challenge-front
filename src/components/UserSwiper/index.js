import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import styled from 'styled-components';
import { Typography } from 'antd';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const { Title, Paragraph } = Typography;
export default function UserSwiper() {
	return (
		<SwiperWrapper>
			<Typography>
				<Swiper
					slidesPerView={3}
					spaceBetween={0}
					centeredSlides={true}
					loop={true}
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
					<SwiperSlide>
						<UserInfoWrapper>
							<UserImage image='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
							<UserName>Emerson</UserName>
							<UserPosition>admin</UserPosition>
						</UserInfoWrapper>
					</SwiperSlide>
					<SwiperSlide>
						<UserInfoWrapper>
							<UserImage image='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
							<UserName>Emerson</UserName>
							<UserPosition>admin</UserPosition>
						</UserInfoWrapper>
					</SwiperSlide>
					<SwiperSlide>
						<UserInfoWrapper>
							<UserImage image='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
							<UserName>Emerson</UserName>
							<UserPosition>admin</UserPosition>
						</UserInfoWrapper>
					</SwiperSlide>
					<SwiperSlide>
						<UserInfoWrapper>
							<UserImage image='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
							<UserName>Emerson</UserName>
							<UserPosition>admin</UserPosition>
						</UserInfoWrapper>
					</SwiperSlide>
				</Swiper>
			</Typography>
		</SwiperWrapper>
	);
}

const UserName = styled(Title)`
	color: white;
	margin-top: 10px;
	margin-bottom: 6px;
`;

const UserPosition = styled(Paragraph)`
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

