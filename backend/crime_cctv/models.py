'''
from common.models import DataTransferObject
from django.db import models
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")


class CrimeVO(models.Model):
    police = models.TextField()  # csv 파일에 있는 값을 DB에 저장
    crime = models.TextField()
    create_at = models.DateTimeField()


class CrimeCctvDTO(DataTransferObject):
    police = ''
    crime = ''
    create_at = ''
'''
