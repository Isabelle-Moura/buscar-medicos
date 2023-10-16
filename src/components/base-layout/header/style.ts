import styled from 'styled-components'

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserSettingsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 5px 10px 5px 15px;
`

export const UserAndMenuIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  height: 30px;
  padding: 20px 5px;
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const UserName = styled.div`
  font-family: ${({ theme }) => theme.fonts.sora};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.black};
`
export const UserEmail = styled.div`
  font-family: ${({ theme }) => theme.fonts.sora};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xsm};
`