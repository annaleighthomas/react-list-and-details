import request from 'superagent';

export async function deleteCharacter(id) {
  const response = await requestAnimationFrame.delete(`{$URL}/${id}`);
  return response.body;
}

export async function getCharacter(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
  
}
