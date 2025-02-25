from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail
from django.conf import settings

class ContactAPIView(APIView):
    def post(self, request):
        # print(request.data)
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            name = serializer.data.get('name')
            email = serializer.data.get('email')
            phone = serializer.data.get('phone')
            message = serializer.data.get('message')

            subject = f'Inquiry from {name}'
            full_message = f'Email: {email}\n\nPhone: {phone}\n\nMessage: \n{message}'
            # print(subject)
            # print(full_message)
            try:
                send_mail(
                    subject=subject,
                    message=full_message,
                    from_email=email,
                    recipient_list=[settings.EMAIL_HOST_USER],  
                    fail_silently=False, 
                )

                return Response(serializer.data, status=status.HTTP_201_CREATED)

            except Exception as e:
                # Print and log the full exception traceback for better debugging
                import traceback
                print("Error in sending mail: ", str(e))
                traceback.print_exc()  # Prints the full error stack trace for debugging
                
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmailSend(APIView):
    def post(self, request): 
        print("Request Data:", request.data)  
        email = request.data.get('email')
        message = request.data.get('message')

        subject = 'Inquiry message'
        full_message = f'Email: {email}\n\nMessage: \n{message}'
        print(subject)
        print(full_message)
        
        try:
            send_mail(
                subject=subject,
                message=full_message,
                from_email=email,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,  
            )
            return Response(request.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            import traceback
            print("Error in sending mail: ", str(e))
            traceback.print_exc()
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)