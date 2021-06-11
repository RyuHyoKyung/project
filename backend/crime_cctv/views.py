import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
from crime_cctv.services import CrimeService


class Crime_API(object):

    @staticmethod
    def main():
        crimeService = CrimeService()
        while 1:
            menu = input('0-Exit\n1-서울CCTV DF\n2-서울범죄 DF\n'
                             '3-경찰서위치 DF\n4-실업율 DF\n5-엑셀POP')
            if menu == '0':
                break
            elif menu == '1':
                crimeService.csv({'context':'./data/', 'fname':'cctv_in_seoul'})
            elif menu == '2':
                crimeService.csv({'context':'./data/', 'fname':'crime_int_seoul'})
            elif menu == '3':
                crimeService.csv({'context':'/data/', 'fname':'police_position'})
            elif menu == '4':
                crimeService.csv({'context':'/data/', 'fanem':'us_unemployment'})
            elif menu == '5':
                pass
            else:
                continue

Crime_API.main()