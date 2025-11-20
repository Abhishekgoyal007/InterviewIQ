import { getCurrentUser } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import ProfileForm from '@/components/ProfileForm';

const ProfilePage = async () => {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      <ProfileForm user={user} />
    </div>
  );
};

export default ProfilePage;
