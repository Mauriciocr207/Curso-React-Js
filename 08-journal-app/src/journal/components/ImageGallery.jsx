import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery( { images = [] } ) {
  return (
    <Box sx={{ m: "auto", width: "100%", height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img}>
            <img
              srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${img}?w=248&fit=crop&auto=format`}
              alt={img}
              loading="lazy"
            />
          </ImageListItem> 
        ))}
      </ImageList>
    </Box>
  );
}
