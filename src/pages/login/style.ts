import styled from 'styled-components'
import backgroundImage from '../../assets/images/login-background.png'
import { Link } from 'react-router-dom'

export const ScreenBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${backgroundImage});
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WhiteBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 32%;
  height: 78%;
  border-radius: 24px;
  border: none;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fonts.sora};
  margin: 0px 40px 0px 50px;
  padding: 10px;
`

export const WelcomeTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0px 0px 2px 2px;
`

export const TitleWrapper = styled.div`
  margin: 15px 3px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lrg};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.midBold};
  letter-spacing: 0.1;
  margin-left: 2px;
`
export const CheckAndForgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 10px 14px -11px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
`

export const RememberMe = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  margin: 0px 22px 0px 6px;
`

export const ForgotMyPassword = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  margin-left: 10;
  text-decoration: none;
  &:active {
    color: ${({ theme }) => theme.colors.gray};
  }
`
