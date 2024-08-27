import { CardType, CardViewType, ServerResponseType, UserType } from "../../types"
import Bookmark from "../../ui/Bookmark"
import { getImageLink } from "../../utils/utils"
import Play from "../../ui/Play"
import { ImgBox, Item, ItemBookMark, Meta, MetaItem, MetaTop } from "./CardStyles"
import { useAppStore } from "../../store/store"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API_URL, getData } from "../../api/api"

interface ICard {
  el: CardType
  type?: CardViewType
}

const Card: React.FC<ICard> = ({ el, type = 'card' }) => {
  const { accessToken, user, updateUser, setMsg } = useAppStore()
  const queryClient = useQueryClient()

  // isBookmarkActive
  const isBookmarkActive = user!.bookmarks!.some(bookmark => bookmark === el._id)

  // Add to bookmarks
  const bookmarkMutaion = useMutation({
    mutationFn: () => getData<ServerResponseType<UserType>>({
      url: `${API_URL}/users/${user!._id}/bookmarks/${el._id}`,
      method: 'PATCH',
      token: accessToken!
    }),
    onSuccess: (data) => {
      updateUser(data!.data)
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
      setMsg(data!.msg)
    }
  })

  return (
    <Item>
      <ImgBox $slide={type === 'trend'}>
        <img src={getImageLink(el.thumbnail)} alt="" />
        <Play />
      </ImgBox>
      <ItemBookMark>
        <Bookmark active={isBookmarkActive} handler={() => bookmarkMutaion.mutate()} disabled={bookmarkMutaion.isPending} />
      </ItemBookMark>
      <Meta $slide={type === 'trend'}>
        <MetaTop $slide={type === 'trend'}>
          <MetaItem>{el.year}</MetaItem>
          <MetaItem className={`metaCategory ${el.category === 'Movie' ? 'movie' : 'tv'}`}>{el.category}</MetaItem>
          <MetaItem>{el.rating}</MetaItem>
        </MetaTop>
        <h4>{el.title}</h4>
      </Meta>
    </Item>
  )
}

export default Card
