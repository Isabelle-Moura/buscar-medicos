import styled from 'styled-components'

export const Table = styled.table`
  min-width: 99.5%;
  margin: auto;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 25px;
  overflow: hidden;
  border-collapse: collapse;
  text-align: left;

  th:first-child {
    border-radius: 12px 0px 0px 0px;
  }

  th:last-child {
    border-radius: 0px 12px 0px 0px;
  }
  td {
    cursor: pointer;
    border: none;
    padding: 1.4%;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xsm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    margin-bottom: 8px;
    white-space: nowrap;
  }

  th {
    border: none;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.defaultGreen};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondWhite};
    text-align: left;
  }

  tr {
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.tableColors.even};
    }
    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.tableColors.odd};
    }
  }
`