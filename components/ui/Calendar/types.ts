export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingData {
  date: Date | null;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  meetingType: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface MeetingType {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

export interface MeetingDetails {
  date: Date | null;
  time: string;
  meetingType: string;
  meetingTypeTitle: string;
} 