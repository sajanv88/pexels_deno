import { Pexels } from './mod.ts';
const client = new Pexels('563492ad6f9170000100000161df53cd8e4749b299857b233a867441');
try {
    const photos = await client.getPhotoById(10339661);
    console.log(photos);
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9Vc2Vycy9zYWphbmt1bWFydmlqYXlhbi9wcm9qZWN0L3BleGVsc19hcGlfbW9kL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ3RGLElBQUk7SUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtDQUN0QjtBQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBleGVscyB9IGZyb20gJy4vbW9kLnRzJztcblxuY29uc3QgY2xpZW50ID0gbmV3IFBleGVscygnNTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxNjFkZjUzY2Q4ZTQ3NDliMjk5ODU3YjIzM2E4Njc0NDEnKTtcbnRyeSB7XG4gICAgY29uc3QgcGhvdG9zID0gYXdhaXQgY2xpZW50LmdldFBob3RvQnlJZCgxMDMzOTY2MSk7XG4gICAgY29uc29sZS5sb2cocGhvdG9zKVxufSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG59XG5cblxuIl19