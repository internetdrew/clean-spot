const Playlist = ({ playlist }) => {
  return (
    <div className='flex space-x-2 items-center'>
      <div className=''>
        <img src={playlist?.images[0]?.url} alt='' className='w-10' />
      </div>
      <div>
        <h2>{playlist.name}</h2>
        <p>Created by {playlist.owner.display_name}</p>
      </div>
    </div>
  );
};

export default Playlist;
