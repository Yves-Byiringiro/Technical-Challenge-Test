from django.db import models

""" 
I enforced the user to create only one record for the company (Singleton Design Patterns), because
 a company can't have more than one profile (mission, vission and objectives).

Note: when a user try to create a new company profile and update the current one instead
"""


class CompanyInfo(models.Model):
    mission = models.TextField()
    vision = models.TextField()
    objectives = models.TextField()

    class Meta:
        verbose_name = 'Company Info'
        verbose_name_plural = 'Company Info'
        

    def save(self, *args, **kwargs):
        # Check if a company info instance already exists
        if CompanyInfo.objects.exists():
            # Retrieve the existing company info instance
            existing_company_info = CompanyInfo.objects.first()

            # Update the existing company info instance with the new values
            existing_company_info.mission = self.mission
            existing_company_info.vision = self.vision
            existing_company_info.objectives = self.objectives

            super(CompanyInfo, existing_company_info).save(*args, **kwargs)
        else:
            super(CompanyInfo, self).save(*args, **kwargs)


