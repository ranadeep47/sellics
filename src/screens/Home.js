import { useCallback, useContext, useEffect } from "react"
import { AppContext } from "../state/context"
import {acceptImage, rejectImage} from '../state'
import styled, { css } from "styled-components"
import {Plus} from '@styled-icons/evaicons-solid/Plus'
import {Close} from '@styled-icons/evaicons-solid/Close'
import {Checkmark} from '@styled-icons/evaicons-solid/Checkmark'
import Button from '../components/Button'
import useGetRandomPhoto from '../hooks/useGetRandomPhoto'
import { devices } from '../styles/devices'

const Heading = styled.h3`
  text-transform: uppercase;
  color: #3a54e5;
  font-size: 16px;
`

const Wrapper = styled.div`
  padding: 1rem;
  ${props => props.border && css`
  border-bottom: 1px solid #E8ECF2;
`}
`

const AddImageButton = styled.button`
  background: #EFF2F7;
  border: 1px solid #E8ECF2;
  border-radius: 4px;
  outline: none;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background: #E8ECF2;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  @media ${devices.laptop} {
    padding: 1rem 4rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 400px;
  @media ${devices.laptop} {
    height: 520px;  
  }
  object-fit: cover;
`

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`

const Thumb = styled.img`
  object-fit: cover;
  min-width: 96px;
  height: 64px;
  @media ${devices.laptop} {
    height: 80px;
    min-width: 128px;
  }
  margin-right: 1rem;
  border-radius: 4px;
  box-shadow: 2px 1px 4px 1px rgb(0 0 0 / 10%);
`

function Home() {
  const {state, dispatch} = useContext(AppContext);
  console.log(state)

  const {loading, error, data, refetch } = useGetRandomPhoto()
  const addImage = () => {
    refetch();
  }

  useEffect(() => {
    if(data) {
      const id = data.id;
      const IsAcceptedAlready = !!state.accepted.find((item) => item.id === id);
      const isRejectedAlready = !!state.rejected.find((item) => item.id === id);
      if(IsAcceptedAlready || isRejectedAlready) {
        refetch();
      }
    }
  }, [data])

  useEffect(() => {
    refetch();
  }, [state.accepted.length, state.rejected.length])

  const reject = useCallback(() => {
    dispatch(rejectImage(data));
  }, [data])

  const accept = useCallback(() => {
    dispatch(acceptImage(data));
  }, [data]);

  return (
    <div>
      <Wrapper border>
        <Heading>Image Approval Application</Heading>
      </Wrapper>
      <Wrapper border>
        <Heading>Approved Images ({state.accepted.length})</Heading>
        {state.accepted.length === 0 && <AddImageButton onClick={addImage}><Plus size="36" title="Add images" color="#E3E8F0"/></AddImageButton>}
        <ImagesWrapper>
          {state.accepted.map((item) => <Thumb src={item.urls.small} key={item.id}/> )}
        </ImagesWrapper>
      </Wrapper>
      <Wrapper border>
       {loading && <Image src={`https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif`}/> }
       {data && <Image src={data.urls.regular}/>} 
      </Wrapper>
      <ButtonsWrapper>
        <Button secondary onClick={reject}>
          <Close size="48" title="Reject" color="#FFF"/>
        </Button>
        <Button primary onClick={accept}>
        <Checkmark size="48" title="Accept" color="#FFF"/>
        </Button>
      </ButtonsWrapper>
    </div>
  )
}

export default Home