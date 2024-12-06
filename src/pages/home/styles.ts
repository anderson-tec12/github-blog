import styled from 'styled-components';

export const ContainerHome = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 864px;
  top: -150px;
  position: relative;
`

export const Profile = styled.div`
 height: 222px;
 background: ${({ theme }) => theme.colors.baseProfile};
 border-radius: ${({ theme }) => theme.borderRadius.default};
 padding: 40px;
 display: flex;
 gap: 30px;
 color: ${({ theme }) => theme.colors.baseText};
 border: 1px solid ${({ theme }) => theme.colors.baseBorder};
 
 .container-image{
  width: 148px;
  height: 148px;

  img{
    width: 148px;
    height: 148px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
 }

 

 .container-profile{
  padding: 7px;
  position: relative;
 }

 .author{
  display: flex;
  justify-content: space-between;
  width: 600px;

  strong{
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: 22px;
  }

  a{
    color: ${(props) => props.theme.colors.blue};
  }
 }

 p{
  color:${(props) => props.theme.colors.baseText};
  font-size: 16px;
  line-height: 1.5;
  margin-top: 10px;
 }

 footer{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  gap:20px;

  span{
    display: flex;
    align-items: center;

    img{
      width: 18px;
      height: 18px;
      margin-right: 7px;
    }

    small{
      font-size: 16px;
    }
    
  }

  
 }
`

export const Form = styled.form`
  margin-top: 20px;

  header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    span{
      color:${({ theme }) => theme.colors.baseTitle}
    }

    small{
      color:${({ theme }) => theme.colors.baseSpan}
    }
  }

  input{
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    background: ${({ theme }) => theme.colors.baseInput} ;
    border:1px solid ${({ theme }) => theme.colors.baseBorder};
    color: ${({ theme }) => theme.colors.baseSpan};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 15px;
  }

`

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  gap:20px;
  height: 380px;
  max-height: 380px;
  padding: 2px ;
  overflow: auto;




&::-webkit-scrollbar-track {
	/* background-color: #f4f4f4; */
}

&::-webkit-scrollbar {
	width:2px;
	/* background: red; */
}

&::-webkit-scrollbar-thumb {
  margin-left: 1px;
	background: ${({ theme }) => theme.colors.baseBorder};
}


  article{
    background: ${({ theme }) => theme.colors.basePost};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 40px;
    min-height: 70px;

    header{
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      h2{
        color: ${({ theme }) => theme.colors.baseTitle};
        font-size: 18px;
      }

      span{
        color: ${({ theme }) => theme.colors.baseSpan};
        width: 100px;
        text-align: right;
        display: block;
      }
    }

    p{
      color:${({ theme }) => theme.colors.baseText};
      margin-top: 10px;
      line-height: 1.2;
      font-size: 17px;
    }
  }
`