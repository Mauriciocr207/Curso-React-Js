import uploadFile from "../../../app/cloudinary/uploadFile";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: 'dc1ieatgh',
  api_key: '921196111823323',
  api_secret: 'PD5LVza2OnpyXDqVEdBADzeg-cY',
  secure: true
})

describe("test on uploadFile.js", () => {
  const uploadUrl = "https://api.cloudinary.com/v1_1/dc1ieatgh/upload";
  test("must upload a file", async () => {
    try {
      const imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bosque.jpg/220px-Bosque.jpg";
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], "foto.jpg");
      
      const url = await uploadFile(file, uploadUrl);
      
      expect(typeof url).toBe('string');

      const segments = url.split('/');
      const imageId = segments[segments.length - 1].replace('.jpg', '');

      const resp = await cloudinary.api.delete_resources([imageId], { resource_type: 'image' });
      console.log(resp);
      
    } catch (error) {
      console.log(error.message);
    }
  });

  

  test('must return null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await uploadFile(file);
    expect(url).toBe(null);
  });
});
