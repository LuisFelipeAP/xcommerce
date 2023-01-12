import React from 'react'
import { AvatarContainer, AvatarLabelGroup, Container, Picture } from './styles'
import Logo from '../../assets/logo.svg'
import Image from 'next/image'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import AvatarPicture from '../../assets/avatar.png'

export function Header() {
	return (
		<Container>
			<Image src={Logo} alt='Company Logo' />

			<AvatarLabelGroup>
				<AvatarContainer>
					<Picture>
						<Image alt='Avatar do usuario' src={AvatarPicture} />
					</Picture>
				</AvatarContainer>
				<ChevronDownIcon />
			</AvatarLabelGroup>
		</Container>
	)
}
