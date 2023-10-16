import styled from 'styled-components'

export const ElipseImg = styled.img`
  width: 220px;
  margin-top: 15px;
  margin-left: 175px;
  position: absolute;
`

export const WomanImg = styled.img`
  width: 170px;
  margin-top: 10px;
  margin-left: 200px;
  position: absolute;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 136px;
  margin-left: 15px;
`

export const GreenBackground = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  width: 400px;
  margin: 12px 15px;
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
  font-size: ${({ theme }) => theme.fontSize.lg};
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