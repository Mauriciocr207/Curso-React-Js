export default async function uploadFile(file, cloudUrl) {
  if( ! file ) return null;

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");

  formData.append("file", file);

  const response = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });

  const { ok } = response;

  if (!ok) return null;

  const { secure_url } = await response.json();

  return secure_url;
}
