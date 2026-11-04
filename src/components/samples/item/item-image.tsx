import { Item } from "@/components/ui/item"

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45"
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05"
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30"
  }
]

export default () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item.Group className="gap-4">
        {music.map((song) => (
          <Item key={song.title} render={<a href="#" />} role="listitem" variant="outline">
            <Item.Media variant="image">
              <img
                alt={song.title}
                className="object-cover grayscale"
                height={32}
                src={`https://avatar.vercel.sh/${song.title}`}
                width={32}
              />
            </Item.Media>
            <Item.Content>
              <Item.Title className="line-clamp-1">
                {song.title} - <span className="text-muted-foreground">{song.album}</span>
              </Item.Title>
              <Item.Description>{song.artist}</Item.Description>
            </Item.Content>
            <Item.Content className="flex-none text-center">
              <Item.Description>{song.duration}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  )
}
