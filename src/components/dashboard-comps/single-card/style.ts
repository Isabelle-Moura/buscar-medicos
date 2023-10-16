import styled from 'styled-components'

export const CardBackground = styled.div`
  width: 15.5vw;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.secondWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px 20px;
  margin: 1px 10px;
`

export const CardName = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fonts.poppins};
`

export const CardInfo = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.sora};
`
// <{ variant: 'DOCTORS' | 'HIRERS' }>
export const IconsColorsTotal = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 15px;
`
// <{ status: 'AVAILABLE' | 'UNAVAILABLE' }>
export const AvailabilityIcons = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 15px;
`