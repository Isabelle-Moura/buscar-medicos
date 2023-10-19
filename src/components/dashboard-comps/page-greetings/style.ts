import styled from 'styled-components'

export const ElipseImg = styled.img`
  width: 55%;
  margin-top: 13px;
  margin-left: 175px;
  position: absolute;
`

export const WomanImg = styled.img`
  width: 42%;
  margin-top: 8px;
  margin-left: 200px;
  position: absolute;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34.2%;
  margin-left: 3.9%;
`

export const GreenBackground = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  width: 35%;
  margin: 0% 1% 0% 2%;
  height: 280px;
  border-radius: 15px;
  box-shadow: 15px 1px 40px #ecdef0;
`

export const CallendarBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.secondWhite};
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 13px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
`

export const Welcome = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.secondWhite};
  margin: 4px 0px;
`

export const WelcomeSubtitle = styled.h4`
  margin: 2px 0px;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #e0e0e0;
`